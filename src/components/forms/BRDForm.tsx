
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface BRDFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BRDForm = ({ open, onOpenChange }: BRDFormProps) => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectPurpose: '',
    inScopeItems: '',
    outOfScopeItems: '',
    stakeholders: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('BRD Form submitted:', formData);
    onOpenChange(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Business Requirement Document (BRD)</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              value={formData.projectName}
              onChange={(e) => handleChange('projectName', e.target.value)}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="projectPurpose">Project Purpose</Label>
            <Textarea
              id="projectPurpose"
              value={formData.projectPurpose}
              onChange={(e) => handleChange('projectPurpose', e.target.value)}
              placeholder="Enter multiple bullet points..."
              rows={4}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="inScopeItems">In-Scope Items</Label>
            <Textarea
              id="inScopeItems"
              value={formData.inScopeItems}
              onChange={(e) => handleChange('inScopeItems', e.target.value)}
              placeholder="Enter multiple bullet points..."
              rows={4}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="outOfScopeItems">Out-of-Scope Items</Label>
            <Textarea
              id="outOfScopeItems"
              value={formData.outOfScopeItems}
              onChange={(e) => handleChange('outOfScopeItems', e.target.value)}
              placeholder="Enter multiple bullet points..."
              rows={4}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="stakeholders">Stakeholders</Label>
            <Textarea
              id="stakeholders"
              value={formData.stakeholders}
              onChange={(e) => handleChange('stakeholders', e.target.value)}
              placeholder="Enter multiple bullet points..."
              rows={4}
              required
            />
          </div>
          
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

export default BRDForm;
