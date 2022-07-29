import { NgModule } from "@angular/core";

import { OrganizationVaultFilterComponent } from "../../organizations/vault/vault-filter/organization-vault-filter.component";
import { SharedModule } from "../../shared/shared.module";

import { CollectionFilterComponent } from "./shared/filters/collection-filter/collection-filter.component";
import { FolderFilterComponent } from "./shared/filters/folder-filter/folder-filter.component";
import { LinkSsoComponent } from "./shared/filters/organization-filter/link-sso.component";
import { OrganizationFilterComponent } from "./shared/filters/organization-filter/organization-filter.component";
import { OrganizationOptionsComponent } from "./shared/filters/organization-filter/organization-options.component";
import { StatusFilterComponent } from "./shared/filters/status-filter/status-filter.component";
import { TypeFilterComponent } from "./shared/filters/type-filter/type-filter.component";
import { VaultFilterService } from "./shared/vault-filter.service";
import { VaultFilterComponent } from "./vault-filter.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    VaultFilterComponent,
    CollectionFilterComponent,
    FolderFilterComponent,
    OrganizationFilterComponent,
    OrganizationOptionsComponent,
    StatusFilterComponent,
    TypeFilterComponent,
    OrganizationVaultFilterComponent,
    LinkSsoComponent,
  ],
  exports: [VaultFilterComponent, OrganizationVaultFilterComponent],
  providers: [VaultFilterService],
})
export class VaultFilterModule {}
