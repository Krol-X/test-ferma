TaskList := State(Task[] {
  id,
  title,
  completed,
  is_edited
})

TASKLIST_LOAD(complete_filter) => OK/FAIL
TASKLIST_SAVE

TASKS_LOAD(data)
TASKS_CREATE(title)
TASKS_EDIT(id)
TASKS_UNDO(id)
TASKS_SAVE(id)
TASKS_TOGGLE(id, flag)
TASKS_DELETE(id)

FILTER_CHANGE(filter)
