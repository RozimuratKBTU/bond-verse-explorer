
import { Link } from "react-router-dom";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

const Sidebar = () => {
  const pages = [
    { title: "Басты бет", path: "/" },
    { title: "Жалпы шолу", path: "/overview" },
    { title: "Байланыс түрлері", path: "/types" },
    { title: "Иондық байланыс", path: "/ionic" },
    { title: "Коваленттік байланыс", path: "/covalent" },
    { title: "Қолданылуы", path: "/application" },
    { title: "Галерея", path: "/gallery" },
  ];

  return (
    <div className="hidden md:block w-64">
      <ShadcnSidebar collapsible="icon">
        <SidebarContent>
          <SidebarHeader className="border-b border-border">
            <h2 className="text-lg font-medium p-4">Мазмұны</h2>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarGroupLabel>Химиялық байланыстар</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {pages.map((page) => (
                  <SidebarMenuItem key={page.path}>
                    <SidebarMenuButton asChild>
                      <Link to={page.path}>{page.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </ShadcnSidebar>
    </div>
  );
};

export default Sidebar;
