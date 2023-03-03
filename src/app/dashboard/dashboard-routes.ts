import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: HomeComponent, data: { title: 'HOME' } },
        ]
    }
];