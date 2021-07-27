const hardProcess = (iterations) => {
    for(let i = 0; i < iterations; i++)
        console.log(`Iteración ${i}`);

    return `${iterations} realizadas`;
};

export default hardProcess;