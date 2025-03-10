import { useLocalSearchParams } from "expo-router";
import ToDoById from "../../../components/todos/detail/TodoById";

export default function ByIdView() {

    const { id } = useLocalSearchParams();

    return (
        <>
            <ToDoById id={id} />
        </>
    )
}