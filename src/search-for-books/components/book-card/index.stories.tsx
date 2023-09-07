import type { Meta, StoryObj } from '@storybook/react';
import { BookCard } from "./index";

const meta = {
    title: 'BookSearch/BookCard',
    component: BookCard
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        imageURL: "http://books.google.com/books/publisher/content?id=VvOxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71GBk7Ci_F2pVkJV85QuIHiX7QhGe2E7hBqzVwi4A6X49x2yvLlSNNif2bbjHjjtNxqRTPZ4dKb17_9nawj_tok70NqKxvHl0Bn-3brt58DI4WyTXeM_qHFVKtmoQuoyla5tzqo&source=gbs_api",
        autorName: "Harry N. MacLean",
        bookName: "Starkweather",
        categorie: "True Crime / Murder / Mass Murder",
    }
};