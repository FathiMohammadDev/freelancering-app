import Modal from "../../ui/Modal";
import { MdDelete } from "react-icons/md";
import { truncate } from "../../utils/truncate";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useState } from "react";
import { useRemoveCategory } from "./useRemoveCategory";

const Category = ({ category, catNum }) => {
  const [showRemoveCat, setShowRemoveCat] = useState(false);
  const { mutate, isPending } = useRemoveCategory();
  return (
    <tr className="bg-bg_primary border-b-[1px] border-border ">
      <td className="px-6 py-4">{catNum}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-text_primary whitespace-nowrap"
      >
        {category.title}
      </th>
      <td className="px-6 py-4">{truncate(category.description, 30)}</td>
      <td className="px-6 py-4">{category.type}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-5">
          <MdDelete
            className="w-5 h-5 cursor-pointer text-error"
            onClick={() => setShowRemoveCat(true)}
          />
          <Modal
            open={showRemoveCat}
            onClose={() => setShowRemoveCat(!showRemoveCat)}
          >
            <ConfirmDelete
              title={category.title}
              onClose={() => setShowRemoveCat(!showRemoveCat)}
              disabled={isPending}
              onConfirm={() =>
                mutate(category._id, {
                  onSuccess: () => setShowRemoveCat(false),
                })
              }
            />
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default Category;
