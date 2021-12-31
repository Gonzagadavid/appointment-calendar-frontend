import { monthNames } from './namesList';

const date = new Date();

const yearCrr = date.getFullYear();

const monthPosition = date.getMonth();

const monthCrr = monthNames[monthPosition];

export { date, yearCrr, monthCrr };