interface INumbStac {
  pi: number;
  bd: string;
  job: boolean;
}

let obj: { name: string; age: number; value: Function } = {
  name: "oleg",
  age: 23,
  value: function (): string {
    return `${this.name} - ${this.age}`;
  },
};

function squareSomething(numb: number) {
  return numb ** 2;
}

export function tests(func: Function): void {
  console.log(func(3));
}

function mergeTwoLists(
  list1: number[] | null[],
  list2: number[] | null[]
): number[] | null[] {
  let arr: number[] | null[] = [];
  return arr;
}

console.log(mergeTwoLists([1, 23, 34], [1, 23, 4]));
