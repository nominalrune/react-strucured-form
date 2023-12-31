import { InputAttribute } from './commonTypes';

type GroupValue<T extends readonly InputAttribute[]> ={ [key in T[number]["name"]]: InputDataType<T[number]>; };
export default GroupValue;