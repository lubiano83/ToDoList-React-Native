import { useLocalSearchParams } from "expo-router";
import UpdateTodo from "../../../components/todos/update/UpdateTodo";

export default function UpdateView() {

    const { id } = useLocalSearchParams();

    return (
        <>
            <UpdateTodo id={id} />
        </>
    )
}