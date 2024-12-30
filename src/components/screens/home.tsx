import { Check } from "lucide-react";
import Link from "next/link";

import {
  AppCard,
  AppCardContent,
  AppCardDescription,
  AppCardFooter,
  AppCardIcon,
  AppCardName
} from "../app-card";
import { ICON_PRESETS, IconCard } from "../icons";

const Home = () => (
  <div className="ml-4 space-y-4">
    <div className="grid md:flex">
      <AppCard className="basis-96">
        <AppCardIcon>
          <IconCard
            icon={Check}
            size="sm"
            {...ICON_PRESETS.check}
            label="Check Tag"
          />
        </AppCardIcon>
        <AppCardContent>
          <AppCardName>Ticket</AppCardName>
          <AppCardDescription>description</AppCardDescription>
        </AppCardContent>
        <AppCardFooter className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-1 text-sm">
            <Link className="font-medium text-primary hover:underline" href="#">
              view
            </Link>
          </div>
        </AppCardFooter>
      </AppCard>
    </div>
  </div>
);

export default Home;
