import * as React from "react";

export type SiteProps = React.PropsWithChildren;

export type SiteHeaderProps = React.PropsWithChildren;

export type SiteBrandingProps = React.PropsWithChildren<{
  siteName: string;
  homepagePath?: string;
}>;

export interface SiteComposition {
  Header: React.FC<SiteHeaderProps>;
  Branding: React.FC<SiteBrandingProps>;
}
