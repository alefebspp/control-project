export function formatRegistryTime(time: string | undefined) {
  if (time) {
    const splitedTime = time.split(':');

    const formatedTime = `${splitedTime[0]}:${splitedTime[1]}`;

    return formatedTime;
  }
}
