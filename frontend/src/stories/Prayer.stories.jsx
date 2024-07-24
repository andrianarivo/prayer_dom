/* eslint-disable import/no-extraneous-dependencies */
import { fn } from '@storybook/test';
import Prayer from '../components/Prayer';
import Tag from '../components/Tag';
import Note from '../components/Note';
import Avatar from '../components/Avatar';
import Editor from '../components/Editor';
import Answer from '../components/Answer';

export default {
  title: 'Example/Prayer',
  component: Prayer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    summary: { control: 'text' },
    description: { control: 'text' },
    createdAt: { control: 'date' },
    iconUrl: { control: 'text' },
    author: { control: 'text' },
    noteCount: { control: 'number' },
    answersCount: { control: 'number' },
    tags: { control: 'object' },
  },
};

const tags = [
  {
    id: 1,
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
  {
    id: 2,
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b4',
  },
];

const notes = [
  {
    id: 1,
    title: 'I hear the Gospel in my dreams',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'Jesus is the Messiah',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
];

const answers = [
  {
    id: 1,
    title: 'Be patient ⏰',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque.',
  },
  {
    id: 2,
    title: 'Gear up ⚙️',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. Nunc congue mauris id felis pellentesque, non vulputate felis pellentesque.',
  },
];

export const Example1 = {
  args: {
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 2,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
    tags,
    notes,
    answers,
    renderTags: (tag) => (
      <Tag
        label={tag.label}
        backgroundColor={tag.backgroundColor}
        color={tag.color}
        key={tag.label}
      />
    ),
    renderNotes: (note, idx) => (
      <Note
        title={note.title}
        text={note.content}
        isOwn={idx % 2 === 0}
        createdAt={note.createdAt}
      />
    ),
    renderAnswers: (answer) => (
      <Answer title={answer.title} content={answer.content} />
    ),
    renderEditor: () => (
      <div className="flex gap-3">
        <Avatar author="David Stanley" className="self-end" size="lg" />
        <div className="flex-1 overflow-scroll">
          <Editor content={'### Note Title\nWrite a note...'} />
        </div>
      </div>
    ),
  },
};

export const Example2 = {
  args: {
    summary: 'God is provider',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat.',
    noteCount: 2,
    answersCount: 2,
    author: 'David Stanley',
    createdAt: '2021-09-01T00:00:00.000Z',
    onClickSeeNotes: fn(),
    answers: [],
    tags,
    renderTags: (tag) => (
      <Tag
        label={tag.label}
        backgroundColor={tag.backgroundColor}
        color={tag.color}
        key={tag.label}
      />
    ),
  },
};
