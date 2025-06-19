
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FSFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FSForm = ({ open, onOpenChange }: FSFormProps) => {
  const [uploadMode, setUploadMode] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    storyPointEstimation: '',
    tasksToBeDone: '',
    definitionOfDone: '',
    definitionOfReady: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadMode) {
      console.log('FS Form submitted with file:', file);
    } else {
      console.log('FS Form submitted with data:', formData);
    }
    onOpenChange(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Functional Specifications (FS)</DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-2 mb-4">
          <Button
            type="button"
            variant={uploadMode ? "default" : "outline"}
            onClick={() => setUploadMode(true)}
          >
            Upload User Story
          </Button>
          <Button
            type="button"
            variant={!uploadMode ? "default" : "outline"}
            onClick={() => setUploadMode(false)}
          >
            Manual Entry
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {uploadMode ? (
            <div>
              <Label htmlFor="userStoryFile">Upload User Story (PDF or TXT)</Label>
              <div className="mt-2">
                <Input
                  id="userStoryFile"
                  type="file"
                  accept=".pdf,.txt"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  rows={4}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="storyPointEstimation">Story Point Estimation</Label>
                <Input
                  id="storyPointEstimation"
                  value={formData.storyPointEstimation}
                  onChange={(e) => handleChange('storyPointEstimation', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="tasksToBeDone">Tasks to be Done</Label>
                <Textarea
                  id="tasksToBeDone"
                  value={formData.tasksToBeDone}
                  onChange={(e) => handleChange('tasksToBeDone', e.target.value)}
                  rows={4}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="definitionOfDone">Definition of Done</Label>
                <Textarea
                  id="definitionOfDone"
                  value={formData.definitionOfDone}
                  onChange={(e) => handleChange('definitionOfDone', e.target.value)}
                  rows={4}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="definitionOfReady">Definition of Ready</Label>
                <Textarea
                  id="definitionOfReady"
                  value={formData.definitionOfReady}
                  onChange={(e) => handleChange('definitionOfReady', e.target.value)}
                  rows={4}
                  required
                />
              </div>
            </>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FSForm;
