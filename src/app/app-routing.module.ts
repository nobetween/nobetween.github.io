import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetComponent } from './auth/reset/reset.component';
import { CourseChangeComponent } from './dashboard/profile/course-change/course-change.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpDeskComponent } from './dashboard/profile/help-desk/help-desk.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile/profile.component';
import { TrainingLibraryComponent } from './dashboard/profile/training-library/training-library.component';
import { FleetManagementComponent } from './dashboard/fleet-management/fleet-management.component';
import { TrendsAnalysisComponent } from './dashboard/trends-analysis/trends-analysis.component';
import { AdvertisingComponent } from './dashboard/advertising/advertising.component';
import { SpecialEventsComponent } from './dashboard/special-events/special-events.component';
import { AccountManagementComponent } from './dashboard/account-management/account-management.component';
import { PinLocationComponent } from './dashboard/configuration-preferences/pin-location/pin-location.component';
import { GeofencingComponent } from './dashboard/configuration-preferences/geofencing/geofencing.component';
import { CommentaryComponent } from './dashboard/configuration-preferences/commentary/commentary.component';
import { GamesComponent } from './dashboard/configuration-preferences/games/games.component';
import { CoursesComponent } from './dashboard/couse-club-layout/courses/courses.component';
import { HolesComponent } from './dashboard/couse-club-layout/holes/holes.component';
import { DefaultTeeTimeComponent } from './dashboard/couse-club-layout/default-tee-time/default-tee-time.component';
import { GeofenceAreaComponent } from './dashboard/couse-club-layout/geofence-area/geofence-area.component';
import { GeofenceTypeComponent } from './dashboard/couse-club-layout/geofence-type/geofence-type.component';
import { ApproachShotComponent } from './dashboard/couse-club-layout/approach-shot/approach-shot.component';
import { TeeLocationComponent } from './dashboard/couse-club-layout/tee-location/tee-location.component';
import { ScoresheetComponent } from './dashboard/couse-club-layout/scoresheet/scoresheet.component';
import { TeesComponent } from './dashboard/couse-club-layout/tees/tees.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'reset',
		component: ResetComponent,
	},
	{
		path: '',
		component: DashboardComponent, canActivate: [AuthGuard],
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'home' },
			{ path: 'home', component: HomeComponent, data: { title: 'HOME' } },

			{ path: 'profile', component: ProfileComponent, data: { title: 'PROFILE' } },
			{ path: 'profile/change-course', component: CourseChangeComponent, data: { title: 'CHANGE COURSE' } },
			{ path: 'profile/training-library', component: TrainingLibraryComponent, data: { title: 'TRAINING LIBRARY' } },
			{ path: 'profile/help-desk', component: HelpDeskComponent, data: { title: 'HELP DESK' } },

			{ path: 'fleet-management', component: FleetManagementComponent, data: { title: 'FLEET MANAGEMENT' } },

			{ path: 'trends-analysis', component: TrendsAnalysisComponent, data: { title: 'TRENDS & ANALYSIS' } },

			{ path: 'special-events', component: SpecialEventsComponent, data: { title: 'SPECIAL EVENTS' } },

			{ path: 'advertising', component: AdvertisingComponent, data: { title: 'ADVERTISING' } },

			{ path: 'course-layout/courses', component: CoursesComponent, data: { title: 'COURSES' } },
			{ path: 'course-layout/holes', component: HolesComponent, data: { title: 'HOLES' } },
			{ path: 'course-layout/tees', component: TeesComponent, data: { title: 'TEES' } },
			{ path: 'course-layout/scoresheet', component: ScoresheetComponent, data: { title: 'SCORESHEET' } },
			{ path: 'course-layout/pin-location', component: PinLocationComponent, data: { title: 'PIN LOCATION' } },
			{ path: 'course-layout/tee-location', component: TeeLocationComponent, data: { title: 'TEE LOCATION' } },
			{ path: 'course-layout/approach-shot', component: ApproachShotComponent, data: { title: 'APPROACH SHOT' } },
			{ path: 'course-layout/geofence-type', component: GeofenceTypeComponent, data: { title: 'GEOFENCE TYPE' } },
			{ path: 'course-layout/geofence-area', component: GeofenceAreaComponent, data: { title: 'GEOFENCE AREA' } },
			{ path: 'course-layout/default-tee-time', component: DefaultTeeTimeComponent, data: { title: 'DEFAULT TEE TIME' } },

			{ path: 'configuration/pin-location', component: PinLocationComponent, data: { title: 'PIN LOCATION' } },
			{ path: 'configuration/games', component: GamesComponent, data: { title: 'GAMES' } },
			{ path: 'configuration/commentary', component: CommentaryComponent, data: { title: 'COMMENTARY' } },
			{ path: 'configuration/geofencing', component: GeofencingComponent, data: { title: 'GEOFENCING' } },

			{ path: 'administrator/account-management', component: AccountManagementComponent, data: { title: 'ACCOUNT MANAGEMENT' } },

		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
