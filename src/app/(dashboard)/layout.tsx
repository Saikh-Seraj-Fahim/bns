"use client"
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../components/common/AppSidebar";
import { Nunito } from "next/font/google";
import NavBarWithTrigger from "../components/common/NavBarWithTrigger";
import { LogOutProvider } from "../LogOutContext";
import { DeleteProvider } from "../DeleteContext";
import DeleteModal from "../components/common/DeleteModal";

const nunitoFont = Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-nunito"
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <div className={`${nunitoFont.variable} antialiased`}>
                <DeleteProvider>
                    <LogOutProvider>
                        <SidebarProvider>
                            <AppSidebar />
                            <main className="w-full">
                                <NavBarWithTrigger />
                                {children}
                                <DeleteModal />
                            </main>
                        </SidebarProvider>
                    </LogOutProvider>
                </DeleteProvider>
            </div>
        </section>
    );
}
