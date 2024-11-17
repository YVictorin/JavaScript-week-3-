
const exercise = function(promoted) {
    let exercise = promoted; //closures allows us to 'remember' variables even after their function has been excuted

    return function() {
        console.log(`Today's exercise: ${exercise}`);
    }
}

const todaysExercise = exercise('skiing');

todaysExercise();