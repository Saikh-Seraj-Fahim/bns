// Fahim
"use client"
import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator, useSidebar
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { usePathname } from "next/navigation"
import Link from "next/link";
import { LayoutDashboard, Mic, User } from "lucide-react";
import { FaQuestionCircle } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdContentPaste, MdDirectionsRun, MdManageAccounts } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useLogOut } from "@/app/LogOutContext";
import LogOutModal from "./LogOutModal";

type SidebarItem = {
    title: string;
    url: string;
    icon: React.ReactNode;
};

const items: SidebarItem[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboard />,
    },
    {
        title: "User Management",
        url: "/user-management",
        icon: <User />,
    },
    {
        title: "Eat",
        url: "/eat",
        icon: <ImSpoonKnife />,
    },
    {
        title: "Workout",
        url: "/workout",
        icon: <MdDirectionsRun />,
    },
    {
        title: "Resources",
        url: "/resources",
        icon: <Mic />,
    },
    {
        title: "Account Management",
        url: "/account-management",
        icon: <MdManageAccounts />,
    },
    {
        title: "Content Management",
        url: "/content-management",
        icon: <MdContentPaste />,
    },
    {
        title: "FAQ",
        url: "/faq",
        icon: <FaQuestionCircle />,
    },
];

export default function AppSidebar() {
    // const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const pathname = usePathname();
    const { isLogoutOpen, setIsLogoutOpen } = useLogOut();
    // Get sidebar state to check if it's collapsed
    const { state } = useSidebar();

    return (
        // Added delay to prevent tooltip from showing immediately
        <TooltipProvider delayDuration={200} skipDelayDuration={0}>
            <Sidebar collapsible="icon" side="left" className="font-nunito text-base">
                <SidebarHeader className="h-20 flex items-center justify-center 
                group-data-[collapsible=icon]:hidden">
                    <h1 className="font-nunito font-bold text-2xl">Pearii</h1>
                </SidebarHeader>
                <SidebarSeparator />

                <SidebarContent className="mt-1">
                    <SidebarGroup>
                        {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => {
                                    const isActive = pathname === item.url;
                                    // console.log(pathname);
                                    // console.log(isActive);
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            {/* Tooltip only shows when sidebar is collapsed and on hover */}
                                            <Tooltip delayDuration={200}>
                                                <TooltipTrigger asChild>
                                                    <SidebarMenuButton asChild
                                                        className={`${isActive ?
                                                            "bg-[#116D661F] text-[#116D66] text-base hover:bg-[#116D661F] hover:text-[#116D66] font-bold" : "text-[#7C8DB5] text-base font-medium"}`}>
                                                        <Link href={item.url}>
                                                            {item.icon}
                                                            <span>{item.title}</span>
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </TooltipTrigger>
                                                {/* Only render tooltip when sidebar is collapsed */}
                                                {state === "collapsed" && (
                                                    <TooltipContent side="right" className="font-nunito">
                                                        <p>{item.title}</p>
                                                    </TooltipContent>
                                                )}
                                            </Tooltip>
                                        </SidebarMenuItem>
                                    )
                                })
                                }
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            {/* Tooltip only shows when collapsed and on hover */}
                            <Tooltip delayDuration={200}>
                                <TooltipTrigger asChild>
                                    <SidebarMenuButton className="text-red-600 hover:text-red-600 
                                    cursor-pointer flex items-center justify-center"
                                        onClick={() => setIsLogoutOpen(true)}>
                                        <TbLogout />
                                        {/* Show "Log Out" text only when sidebar is expanded */}
                                        <span className="group-data-[collapsible=icon]:hidden text-base">Log Out</span>
                                    </SidebarMenuButton>
                                </TooltipTrigger>
                                {/* Only render tooltip when sidebar is collapsed */}
                                {state === "collapsed" && (
                                    <TooltipContent side="right" className="font-nunito">
                                        <p>Log Out</p>
                                    </TooltipContent>
                                )}
                            </Tooltip>
                            {/* {isLogoutOpen && <LogOutModal />} */}
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <LogOutModal />
                </SidebarFooter>
            </Sidebar>
        </TooltipProvider>
    );
}
