
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

  const tools = [
    { title: "Басып шығару", path: "#" },
    { title: "Экспорттау", path: "#" },
    { title: "Сақтау", path: "#" },
  ];

  return (
    <div className="hidden md:block w-64 bg-gray-50 border-r border-gray-200">
      <ShadcnSidebar collapsible="icon">
        <SidebarContent>
          <SidebarHeader className="border-b border-gray-200">
            <div className="p-4 bg-gray-100">
              <h2 className="text-lg font-serif">Мазмұны</h2>
            </div>
          </SidebarHeader>
          
          <SidebarGroup>
            <SidebarGroupLabel className="font-serif text-sm">Химиялық байланыстар</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {pages.map((page) => (
                  <SidebarMenuItem key={page.path}>
                    <SidebarMenuButton asChild>
                      <Link to={page.path} className="font-serif">{page.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel className="font-serif text-sm">Құралдар</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tools.map((tool) => (
                  <SidebarMenuItem key={tool.title}>
                    <SidebarMenuButton asChild>
                      <Link to={tool.path} className="font-serif">{tool.title}</Link>
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
