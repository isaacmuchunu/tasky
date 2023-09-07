import deleteIcon from "../assets/delete.png";
import But from "./But";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="p-2 w-relative bg-gray-700 my-2 rounded shadow-md hover:shadow-xl overflow-hidden">
      <h3 className="text-lg font-semibold font-poppins text-gray-200 capitalize mb-4">
        {title}
      </h3>

      <div className="flex items-center mr-2 mb-2">
        <div className="flex justify-start space-x-1">
          {tags.map((tag, index) => (
            <But key={index} tagName={tag} selected={true} />
          ))}
        </div>

        <div className="ml-auto ">
          <img
            src={deleteIcon}
            alt="delete"
            className="w-4 h-4 cursor-pointer opacity-50"
            onClick={() => handleDelete(index)}
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
