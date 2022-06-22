import { gql } from "@apollo/client";
import { Lesson } from "./Lesson";

export const GET_LESSONS_QUERY = gql`
query {
  lessons {
    id
    title
  }
}`

export function Sidebar() {
  return (
    <aside className="w-[384px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de Aulas</span>

      <div className="flex flex-col gap-8">
        <Lesson 
        title="Aula 1"
        slug="Aula 1"
        availableAt={new Date()}
        type="class" />
        <Lesson 
        title="Aula 2"
        slug="Aula 2"
        availableAt={new Date()}
        type="class" />
        <Lesson 
        title="Aula 3"
        slug="Aula 3"
        availableAt={new Date()}
        type="live" />
        <Lesson 
        title="Aula 4"
        slug="Aula 4"
        availableAt={new Date()}
        type="class" />
        <Lesson 
        title="Aula 5"
        slug="Aula 5"
        availableAt={new Date()}
        type="class" />
        <Lesson 
        title="Aula 6"
        slug="Aula 6"
        availableAt={new Date()}
        type="class" />
      </div>
    </aside>
  );
}
