
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CodeDocumentationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CodeDocumentationForm = ({ open, onOpenChange }: CodeDocumentationFormProps) => {
  const [uploadMode, setUploadMode] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadMode) {
      console.log('Code Documentation Form submitted with file:', file);
    } else {
      console.log('Code Documentation Form submitted with code:', code);
    }
    onOpenChange(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Code Documentation</DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-2 mb-4">
          <Button
            type="button"
            variant={uploadMode ? "default" : "outline"}
            onClick={() => setUploadMode(true)}
          >
            Upload ABAP Code
          </Button>
          <Button
            type="button"
            variant={!uploadMode ? "default" : "outline"}
            onClick={() => setUploadMode(false)}
          >
            Type Code
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {uploadMode ? (
            <div>
              <Label htmlFor="codeFile">Upload ABAP Code (TXT)</Label>
              <div className="mt-2">
                <Input
                  id="codeFile"
                  type="file"
                  accept=".txt"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          ) : (
            <div>
              <Label htmlFor="codeInput">ABAP Code</Label>
              <Textarea
                id="codeInput"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter your ABAP code here..."
                rows={20}
                className="font-mono text-sm"
                required
              />
            </div>
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

export default CodeDocumentationForm;
