

export interface TemplateState {
  openDrawer: boolean;
  menuItems: MenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
}