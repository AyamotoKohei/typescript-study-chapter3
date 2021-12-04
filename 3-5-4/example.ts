function waitThenString(duration: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`${duration}ms passed`), duration);
  });
}

function waitThenNumber(duration: number) {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(duration), duration);
  });
}

function waitAll() {
  return Promise.all([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(1000),
  ]);
} // function waitAll(): Promise<[string, number, string]>

function waitRace() {
  return Promise.race([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(1000),
  ]);
} // function waitRace(): Promise<string | number>

async function main() {
  const [a, b, c] = await waitAll(); // a:string, b:number, c:string
  const result = await waitRace(); // result: string | number
}
