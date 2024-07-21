import './App.css';
import React from 'react';
import Tag from './components/Tag';
import Note from './components/Note';
import Prayer from './components/Prayer';
import Avatar from './components/Avatar';
import Editor from './components/Editor';

const tags = [
  {
    label: 'Finance',
    backgroundColor: '#ffece1',
    color: '#ff5c00',
  },
  {
    label: 'Self-control',
    backgroundColor: '#e1f6ff',
    color: '#2c62b4',
  },
];

const notes = [
  {
    title: 'I hear the Gospel in my dreams',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
  {
    title: 'Jesus is the Messiah',
    content:
      'Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet.',
    isPrivate: false,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
];

const App = () => {
  const [markdown, setMarkdown] = React.useState(
    '### Note Title\nWrite a note...'
  );
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h1 className="text-2xl my-6">Playground phase</h1>
      <div className="flex">
        <Tag label="Finance" backgroundColor="#ffece1" color="#ff5c00" />
      </div>

      <div className="w-2/3">
        <Note
          title="I hear the Gospel in my dreams"
          text="# Hi, *Pluto*! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et dui id leo suscipit imperdiet. "
          author="David Stanley"
          isOwn={false}
          createdAt="2021-09-01T00:00:00.000Z"
        />
      </div>

      <div className="w-2/3">
        <Prayer
          summary="God is provider"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar urna vel efficitur iaculis. Praesent dapibus arcu et leo malesuada, in suscipit ligula tincidunt. Mauris malesuada lacinia eros. Proin sed maximus leo. Suspendisse at purus ac libero volutpat consequat."
          noteCount={2}
          answersCount={2}
          author="David Stanley"
          createdAt="2021-09-01T00:00:00.000Z"
          tags={tags}
          renderTags={(tag, idx) => (
            <Tag
              key={idx}
              label={tag.label}
              backgroundColor={tag.backgroundColor}
              color={tag.color}
            />
          )}
          notes={notes}
          renderNotes={(note, idx) => (
            <Note
              key={idx}
              title={note.title}
              text={note.content}
              isOwn={idx % 2 === 0}
              createdAt={note.createdAt}
            />
          )}
          renderEditor={() => (
            <div className="flex gap-3">
              <Avatar author="David Stanley" className="self-end" size="lg" />
              <div className="flex-1 overflow-scroll">
                <Editor content={markdown} onChange={setMarkdown} />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default App;
