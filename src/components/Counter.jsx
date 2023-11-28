import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";
import { useGetAllPostsQuery, useGetPostsByIdQuery } from "../redux/postsSlice";

export default function Counter() {


    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetPostsByIdQuery(5);

    return (
        <div>
            <h1>Count is {count}</h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <button onClick={() => dispatch(incrementByAmount(20))}>
                Increment By Amount
            </button>
        </div>
    )
}