import { useParams } from "next/navigation";

import Home from "./components/screens/home";

interface RouteConfig {
  component: React.ComponentType;
  title: string;
  showSidebar?: boolean;
}

const SignUp = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h1 className="text-2xl font-bold">Sign Up</h1>
  </div>
);

const SignIn = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h1 className="text-2xl font-bold">Sign In</h1>
  </div>
);

const PasswordForgot = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h1 className="text-2xl font-bold">Reset Password</h1>
  </div>
);

const TicketsList = () => (
  <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
    <h1 className="text-2xl font-bold">All Tickets</h1>
  </div>
);

const TicketDetail = () => {
  const params = useParams();
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="text-2xl font-bold">Ticket {params.ticketId}</h1>
    </div>
  );
};

const TicketEdit = () => {
  const params = useParams();
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <h1 className="text-2xl font-bold">Edit Ticket {params.ticketId}</h1>
    </div>
  );
};

const routeConfig: Record<string, RouteConfig> = {
  "/": { component: Home, title: "Home", showSidebar: true },
  "/sign-up": { component: SignUp, title: "Sign Up" },
  "/sign-in": { component: SignIn, title: "Sign In" },
  "/password-forgot": { component: PasswordForgot, title: "Reset Password" },
  "/tickets": {
    component: TicketsList,
    title: "All Tickets",
    showSidebar: true
  },
  "/tickets/:id": {
    component: TicketDetail,
    title: "Ticket Details",
    showSidebar: true
  },
  "/tickets/:id/edit": {
    component: TicketEdit,
    title: "Edit Ticket",
    showSidebar: true
  }
};

const matchRoute = (pathname: string): string | undefined => {
  const paths = Object.keys(routeConfig);
  return paths.find((path) => {
    const pathParts = path.split("/");
    const pathnameParts = pathname.split("/");

    if (pathParts.length !== pathnameParts.length) return false;

    return pathParts.every((part, i) => {
      if (part.startsWith(":")) return true;
      return part === pathnameParts[i];
    });
  });
};

export { matchRoute, routeConfig };
