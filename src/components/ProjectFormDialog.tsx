
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProjectForm from './ProjectForm';

interface ProjectFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectFormDialog: React.FC<ProjectFormDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-wine-light border-none max-w-md md:max-w-lg w-[90%] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 text-transparent bg-clip-text">
            Solicite seu orçamento
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Preencha o formulário abaixo para receber um orçamento personalizado para o seu aplicativo.
          </DialogDescription>
        </DialogHeader>
        <ProjectForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFormDialog;
