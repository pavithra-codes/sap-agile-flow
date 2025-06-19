
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload } from 'lucide-react';

interface UserStoryFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UserStoryForm = ({ open, onOpenChange }: UserStoryFormProps) => {
  const [uploadMode, setUploadMode] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    purpose: '',
    projectSummary: '',
    successCriteria: '',
    objectives: '',
    inScopeItems: '',
    outOfScopeItems: '',
    nonFunctionalRequirements: '',
    assumptions: '',
    dependencies: '',
    constraints: '',
    stakeholders: '',
    rolesResponsibilities: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadMode) {
      console.log('User Story Form submitted with file:', file);
    } else {
      console.log('User Story Form submitted with data:', formData);
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
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create User Stories</DialogTitle>
        </DialogHeader>
        
        <div className="flex gap-2 mb-4">
          <Button
            type="button"
            variant={uploadMode ? "default" : "outline"}
            onClick={() => setUploadMode(true)}
          >
            Upload BRD
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
              <Label htmlFor="brdFile">Upload BRD (PDF or TXT)</Label>
              <div className="mt-2">
                <Input
                  id="brdFile"
                  type="file"
                  accept=".pdf,.txt"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="purpose">Purpose</Label>
                <Textarea
                  id="purpose"
                  value={formData.purpose}
                  onChange={(e) => handleChange('purpose', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="projectSummary">Project Summary</Label>
                <Textarea
                  id="projectSummary"
                  value={formData.projectSummary}
                  onChange={(e) => handleChange('projectSummary', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="successCriteria">Success Criteria</Label>
                <Textarea
                  id="successCriteria"
                  value={formData.successCriteria}
                  onChange={(e) => handleChange('successCriteria', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="objectives">Objectives</Label>
                <Textarea
                  id="objectives"
                  value={formData.objectives}
                  onChange={(e) => handleChange('objectives', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="inScopeItems">In-Scope Items</Label>
                <Textarea
                  id="inScopeItems"
                  value={formData.inScopeItems}
                  onChange={(e) => handleChange('inScopeItems', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="outOfScopeItems">Out-of-Scope Items</Label>
                <Textarea
                  id="outOfScopeItems"
                  value={formData.outOfScopeItems}
                  onChange={(e) => handleChange('outOfScopeItems', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="nonFunctionalRequirements">Non-functional Requirements</Label>
                <Textarea
                  id="nonFunctionalRequirements"
                  value={formData.nonFunctionalRequirements}
                  onChange={(e) => handleChange('nonFunctionalRequirements', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="assumptions">Assumptions</Label>
                <Textarea
                  id="assumptions"
                  value={formData.assumptions}
                  onChange={(e) => handleChange('assumptions', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="dependencies">Dependencies</Label>
                <Textarea
                  id="dependencies"
                  value={formData.dependencies}
                  onChange={(e) => handleChange('dependencies', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="constraints">Constraints</Label>
                <Textarea
                  id="constraints"
                  value={formData.constraints}
                  onChange={(e) => handleChange('constraints', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="stakeholders">Stakeholders</Label>
                <Textarea
                  id="stakeholders"
                  value={formData.stakeholders}
                  onChange={(e) => handleChange('stakeholders', e.target.value)}
                  rows={3}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="rolesResponsibilities">Roles and Responsibilities</Label>
                <Textarea
                  id="rolesResponsibilities"
                  value={formData.rolesResponsibilities}
                  onChange={(e) => handleChange('rolesResponsibilities', e.target.value)}
                  rows={3}
                  required
                />
              </div>
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

export default UserStoryForm;
