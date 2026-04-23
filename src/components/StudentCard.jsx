function StudentCard({ course }) {

    return (
        <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
            <h3>{course.name}</h3>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>

            {course.grade < 50 && course.attending === false && (
                <p style={{ color: "red" }}>At Risk</p>
            )}

            {/* Eligible for distinction */}
            {course.grade >= 85 && (
                <p style={{ color: "green" }}>Eligible for Distinction</p>
            )}
        </div>
    );
}
export default StudentCard;