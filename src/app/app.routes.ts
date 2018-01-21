import { HomeComponent } from "./home/components/home.component";
import { AboutComponent } from "./about/components/about.component";
import { TeamComponent } from "./team/components/team.component";
import { OrderOnlineComponent } from "./order-online/components/order-online.component";
import { ContactComponent } from "./contact/components/contact.component";


export const APPROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'order-online', component: OrderOnlineComponent },
    { path: 'contacts', component: ContactComponent }
  ]