import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

// ----- demo stuff ------

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);

// ----- end demo stuff -----

import ArtworkPreview from "./cms-preview-templates/artwork";
import AboutUsPreview from "./cms-preview-templates/about-us";
import ProgramsPreview from "./cms-preview-templates/programs";

CMS.registerPreviewTemplate("artwork", ArtworkPreview);
CMS.registerPreviewTemplate("about_us", AboutUsPreview);
CMS.registerPreviewTemplate("programs", ProgramsPreview);

CMS.init();
