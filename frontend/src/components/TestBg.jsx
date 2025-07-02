const TestBG = () => {
  return (
    <div
      className='w-full h-screen bg-[#FFFFFF] flex justify-center items-center'
      style={{
        backgroundImage: 'url("/grid.svg")',
        backgroundRepeat: 'no-repeat', // ❌ No repeating
        backgroundSize: '500px 500px', // ✅ Exact size
        backgroundPosition: 'center', // ✅ Centered
      }}
    >
      <h1 className='text-black text-4xl text-center'>
        Background with grid.svg (500x500, no repeat)
      </h1>
      <h2>hello</h2>
    </div>
  );
};

export default TestBG;
