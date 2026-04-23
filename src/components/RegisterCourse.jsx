import { useState, useRef, useCallback } from "react";

function RegisterCourse({ courses, setCourses }) {
    const nameRef = useRef();

    const [form, setForm] = useState({
        name: "",
        credits: "",
        grade: "",
        attending: false,
        difficulty: "Easy",
    });
// useCallback is used so the submit function isn't recreated on every render
// making the component slightly more efficient
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (form.name.trim() === "") {
                alert("Course name is required");
                return;
            }

            if (form.grade < 5 || form.grade > 10) {
                alert("Grade must be between 5 and 10");
                return;
            }

            const newCourse = {
                id: Date.now(),
                name: form.name,
                credits: Number(form.credits),
                grade: Number(form.grade),
                attending: form.attending,
                difficulty: form.difficulty,
            };

            setCourses([...courses, newCourse]);

            setForm({
                name: "",
                credits: "",
                grade: "",
                attending: false,
                difficulty: "Easy",
            });

            nameRef.current.focus();
        },
        [form, courses, setCourses]
    );

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={nameRef}
                type="text"
                placeholder="Course Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                type="number"
                placeholder="Credits"
                value={form.credits}
                onChange={(e) => setForm({ ...form, credits: e.target.value })}
            />

            <input
                type="number"
                placeholder="Grade (5-10)"
                value={form.grade}
                onChange={(e) => setForm({ ...form, grade: e.target.value })}
            />

            <label>
                Attending:
                <input
                    type="checkbox"
                    checked={form.attending}
                    onChange={(e) =>
                        setForm({ ...form, attending: e.target.checked })
                    }
                />
            </label>

            <select
                value={form.difficulty}
                onChange={(e) =>
                    setForm({ ...form, difficulty: e.target.value })
                }
            >
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
            </select>

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterCourse;