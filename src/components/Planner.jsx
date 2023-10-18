import "./Planner.css";
import { } from "solid-bootstrap";
import TaskCard from "./Task-Card";
import { createSignal, onMount } from "solid-js";
import { createClient } from '@supabase/supabase-js';

const Planner = () => {
    const supabase = createClient('https://vxudiapfzrpthkojjahj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dWRpYXBmenJwdGhrb2pqYWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NjQ3ODAsImV4cCI6MjAwMjE0MDc4MH0.hd9QH9zb0_e1lkztnvEjaa6wntSYKthtZMdyp8s3oZw')
    const [tasks, setTasks] = createSignal([])

    onMount(() => {
        getTasks()
    })

    const getTasks = async () => {
        let today = new Date()
        today = today.toISOString().substring(0, 10)

        const { data, error } = await supabase
            .from('tasks')
            .select()
            .eq('schedule_date', today)
            .order('id', { ascending: true })

        console.log('get data based on date:', today, data)
        setTasks(data)
    }

    return (
        <>
            <div class="container-planner">
                <tab-container>
                    <input type="radio" id="tabToggle01" name="tabs" value="1" checked />
                    <label for="tabToggle01" checked="checked">Task</label>
                    <input type="radio" id="tabToggle02" name="tabs" value="2" />
                    <label for="tabToggle02">Add Task</label>
                    <input type="radio" id="tabToggle03" name="tabs" value="3" />
                    <label for="tabToggle03">Chart</label>
                    <tab-content>
                        <For each={tasks()}>{(task) =>
                            <TaskCard key={task.id} task={task} />
                        }</For>
                    </tab-content>
                    <tab-content>
                        <p>TAB [ <tab-number>02</tab-number> ] content</p>
                        <p>CSS Grid...</p>
                    </tab-content>
                    <tab-content>
                        <p>TAB [ <tab-number>03</tab-number> ] content</p>
                        <p>CSS Grid is the...</p>
                    </tab-content>
                    <tab-content>
                        <p>TAB [ <tab-number>04</tab-number> ] content</p>
                        <p>CSS Grid is the future!</p>
                    </tab-content>
                </tab-container>
            </div>
        </>
    )
}

export default Planner