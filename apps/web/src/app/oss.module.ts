import { NgModule } from "@angular/core";

import { TrialInitiationModule } from "./accounts/trial-initiation/trial-initiation.module";
import { VaultFilterModule } from "./modules/vault-filter/vault-filter.module";
import { OrganizationBadgeModule } from "./modules/vault/modules/organization-badge/organization-badge.module";
import { OrganizationCreateModule } from "./organizations/create/organization-create.module";
import { OrganizationManageModule } from "./organizations/manage/organization-manage.module";
import { OrganizationUserModule } from "./organizations/users/organization-user.module";
import { LooseComponentsModule } from "./shared/loose-components.module";
import { PipesModule } from "./shared/pipes/pipes.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    LooseComponentsModule,
    TrialInitiationModule,
    VaultFilterModule,
    OrganizationBadgeModule,
    PipesModule,
    OrganizationManageModule,
    OrganizationUserModule,
    OrganizationCreateModule,
  ],
  exports: [
    SharedModule,
    LooseComponentsModule,
    TrialInitiationModule,
    VaultFilterModule,
    OrganizationBadgeModule,
    PipesModule,
  ],
  bootstrap: [],
})
export class OssModule {}
