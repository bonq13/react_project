import { Title } from '@storybook/blocks';
import { Button } from './Button.styles';

export default {
	title: 'Components/Atoms/Button',
	component: Button,
};

const Template = (args) => <Button {...args}>Read more</Button>;

export const Default = Template.bind({});
export const Big = Template.bind({});
Big.args = {
    $isBig: true,
}
