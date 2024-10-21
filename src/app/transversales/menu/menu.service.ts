import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTopBar() {
    const translateElement = document.querySelector(
      ".idioma-icon-barra-superior-govco"
    );
    if (translateElement) {
      this.renderer.listen(translateElement, "click", this.translate);
    }
  }

  translate() {
    // Implementar traducción
  }

  initMenu() {

    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((element) => {
      this.renderer.listen(element, "click", (e: Event) => e.stopPropagation());
    });

    const menuItems = document.querySelectorAll(
      ".navbar-menu-govco a.dir-menu-govco"
    );
    menuItems.forEach((element) => {
      this.renderer.listen(element, "click", this.eventClickItem.bind(this));
    });
  }

  eventClickItem(event: Event) {
    const target = event.target as HTMLElement;
    const parentNavbar = target.closest(".navbar-menu-govco");
    if (parentNavbar) {
      parentNavbar.querySelectorAll("a.active").forEach((element) => {
        this.renderer.removeClass(element, "active");
      });
      this.renderer.addClass(target, "active");
      const container = target.closest(".nav-item");
      if (container) {
        const itemParent = container.querySelector(".nav-link");
        if (itemParent) {
          this.renderer.addClass(itemParent, "active");
        }
      }
    }
  }

}
