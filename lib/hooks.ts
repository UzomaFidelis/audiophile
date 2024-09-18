import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Typed hooks to use throughout the app
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
