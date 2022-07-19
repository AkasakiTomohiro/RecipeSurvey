import Typography from '@mui/material/Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'RecipeSurvey/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: (<Typography paragraph>
    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
    posuere sollicitudin aliquam ultrices sagittis orci a.
  </Typography>)
}
