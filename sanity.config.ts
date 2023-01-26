import { visionTool } from '@sanity/vision';
import StudioNavbar from 'components/StudioNavbar';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { getDefaultDocumentNode } from 'utils/structure';

import { schemaTypes } from './schemas';
import { myTheme } from './theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'Deren_Sanity_Blog_Studio',
  title: 'Deren Sanity Blog Studio',
  projectId,
  dataset,
  plugins: [deskTool(
    {
      defaultDocumentNode: getDefaultDocumentNode
    }
  ), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      // logo: Logo,
      navbar: StudioNavbar
    }
  },
  // theme: myTheme
})
