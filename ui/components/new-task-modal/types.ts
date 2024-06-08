export interface NewTasksModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: { description: string }) => void
}