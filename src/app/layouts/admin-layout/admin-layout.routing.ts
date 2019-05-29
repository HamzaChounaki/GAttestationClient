import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { VilleComponent } from '../../ville/ville.component';
import { TypeCompteComponent } from '../../typecompte/typecompte.component';
import { RegionComponent } from '../../region/region.component';
import { ProfilComponent } from '../../profil/profil.component';
import { EtudiantComponent } from '../../etudiant/etudiant.component';
import { EtablissementComponent } from '../../etablissement/etablissement.component';
import { EmployeComponent } from '../../employe/employe.component';
import { CompteComponent } from '../../compte/compte.component';
import { AttestationComponent } from '../../attestation/attestation.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'employe',        component: EmployeComponent },
    { path: 'profil',         component: ProfilComponent},
    { path: 'ville',          component: VilleComponent},
    { path: 'typecompte',     component: TypeCompteComponent},
    { path: 'region',         component: RegionComponent},
    { path: 'etudian',        component: EtudiantComponent},
    { path: 'etablissement',  component: EtablissementComponent},
    { path: 'compte',         component: CompteComponent},
    { path: 'Attestation',    component: AttestationComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
