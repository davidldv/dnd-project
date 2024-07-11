import {closestCenter, DndContext, DragEndEvent} from '@dnd-kit/core'
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'
import User from './User'

interface SectionCardProps {
  people: {
    name: string;
    age: number;
    id: string;
  }[];
  setPeople: React.Dispatch<React.SetStateAction<{
    name: string;
    age: number;
    id: string;
  }[]>>
}

const SectionCard = ({ people, setPeople }: SectionCardProps) => {
  return (
    <div className='w-4/6'>
      <h1 className='text-2xl font-bold'>Users List</h1>

      <SortableContext
        items={people.map(person => person.id)}
        strategy={verticalListSortingStrategy}
      >
        {people.map(person => (
          <User user={person} key={person.id} />
        ))}
      </SortableContext>
    </div>
  )
}

export default SectionCard