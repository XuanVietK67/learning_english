import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "@hello-pangea/dnd";
import "./styles/index.css";
import { useState } from "react";
import Cute from "./assets/image/Cute.jpg";
import Girl from "./assets/image/asian-girl-anime-avatar-ai-art-photo - Copy.jpg";
import Girl2 from "./assets/image/anh-avatar-cute-95.jpg";
import Image from "./assets/image/rain.jpg";

const App = () => {
  const animalss = ["lion", "fish", "elephant"];
  const [animals, setAnimals] = useState<String[]>(animalss);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    let animalsReorder = animals;
    const animal = animalsReorder[result.source.index];
    animalsReorder.splice(result.source.index, 1);
    animalsReorder.splice(result.destination.index, 0, animal);
    setAnimals([...animalsReorder]);
  };
  return (
    <div>
      adswb
      <div className="grid grid-cols-3 grid-rows-1 gap-3">
        <img src={Cute} />
        <img src={Girl} />
        <img src={Girl2} />
        <img src={Image} className="min-w-full" />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="animal">
          {(droppableProvided) => (
            <div
              className="flex flex-col gap-3"
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {animals.map((animal, index) => {
                return (
                  <Draggable key={index} draggableId={"" + index} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        className="p-3 border-1 text-white bg-amber-500 w-[300px] text-center"
                      >
                        {animal}
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default App;
