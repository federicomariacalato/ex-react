type MessageProps = {
  age: number;
};

export function Message({ age }: MessageProps) {
  return (
    <>
      {age > 18 && <p>Your age is {age}</p>}
      {age <= 18 && <p>You are very young!</p>}
    </>
  );
}
