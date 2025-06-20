
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Code, Book, ArrowDown } from "lucide-react";
import BRDForm from "@/components/forms/BRDForm";
import UserStoryForm from "@/components/forms/UserStoryForm";
import FSForm from "@/components/forms/FSForm";
import TSForm from "@/components/forms/TSForm";
import CodeDocumentationForm from "@/components/forms/CodeDocumentationForm";

const Index = () => {
  const [openForms, setOpenForms] = useState({
    brd: false,
    userStory: false,
    fs: false,
    ts: false,
    codeDoc: false
  });

  const openForm = (formType: keyof typeof openForms) => {
    setOpenForms(prev => ({ ...prev, [formType]: true }));
  };

  const closeForm = (formType: keyof typeof openForms) => {
    setOpenForms(prev => ({ ...prev, [formType]: false }));
  };

  const phases = [
    {
      id: 1,
      title: "Requirements",
      description: "Create and document business needs",
      icon: <FileText className="h-8 w-8" />,
      color: "from-blue-600 to-blue-700",
      functions: [
        {
          name: "Create Business Requirement Document (BRD)",
          description: "Generate comprehensive BRDs automatically",
          action: () => openForm('brd')
        },
        {
          name: "Create User Stories",
          description: "Create detailed user stories from requirements",
          action: () => openForm('userStory')
        }
      ]
    },
    {
      id: 2,
      title: "Design",
      description: "Create technical and functional specifications",
      icon: <Book className="h-8 w-8" />,
      color: "from-purple-600 to-purple-700",
      functions: [
        {
          name: "Create Functional Specifications (FS)",
          description: "Generate detailed functional specifications",
          action: () => openForm('fs')
        },
        {
          name: "Create Technical Specifications (TS)",
          description: "Create comprehensive technical documentation",
          action: () => openForm('ts')
        }
      ]
    },
    {
      id: 3,
      title: "Development",
      description: "Create and document your SAP solutions",
      icon: <Code className="h-8 w-8" />,
      color: "from-green-600 to-green-700",
      functions: [
        {
          name: "Create Code Documentation",
          description: "Automatically generate code documentation",
          action: () => openForm('codeDoc')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              SAP Agile SDLC Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Accelerate your development lifecycle with automated tools
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Process Flow Indicator */}
        <div className="flex items-center justify-center mb-12 space-x-4">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center">
              <div className={`bg-gradient-to-r ${phase.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg shadow-lg`}>
                {phase.id}
              </div>
              <span className="ml-3 text-lg font-medium text-gray-700">{phase.title}</span>
              {index < phases.length - 1 && (
                <ArrowDown className="ml-4 h-6 w-6 text-gray-400 rotate-90" />
              )}
            </div>
          ))}
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <Card key={phase.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              {/* Card Header with Gradient - Fixed height for uniformity */}
              <div className={`bg-gradient-to-r ${phase.color} text-white p-6 h-32`}>
                <CardHeader className="p-0 h-full flex justify-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                      {phase.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-xl font-bold text-white leading-tight">
                        {phase.id}. {phase.title}
                      </CardTitle>
                      <CardDescription className="text-white/90 mt-1 text-sm leading-tight">
                        {phase.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </div>

              {/* Card Content */}
              <CardContent className="p-6 bg-white">
                <div className="space-y-4">
                  {phase.functions.map((func, index) => (
                    <div key={index} className="space-y-2">
                      <Button
                        onClick={func.action}
                        className="w-full text-left justify-start h-auto p-4 bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200 hover:border-gray-300 transition-all duration-200"
                        variant="outline"
                      >
                        <div className="text-left min-w-0 flex-1">
                          <div className="font-semibold text-sm mb-1 leading-tight break-words">
                            {String.fromCharCode(97 + index)}. {func.name}
                          </div>
                          <div className="text-xs text-gray-600 font-normal leading-relaxed">
                            {func.description}
                          </div>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Streamline Your SAP Development Process
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                This dashboard provides automated tools to accelerate each phase of your agile SDLC. 
                From requirements gathering to development documentation, each tool is designed to 
                reduce manual effort and improve consistency across your SAP projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Forms */}
      <BRDForm 
        open={openForms.brd} 
        onOpenChange={() => closeForm('brd')} 
      />
      <UserStoryForm 
        open={openForms.userStory} 
        onOpenChange={() => closeForm('userStory')} 
      />
      <FSForm 
        open={openForms.fs} 
        onOpenChange={() => closeForm('fs')} 
      />
      <TSForm 
        open={openForms.ts} 
        onOpenChange={() => closeForm('ts')} 
      />
      <CodeDocumentationForm 
        open={openForms.codeDoc} 
        onOpenChange={() => closeForm('codeDoc')} 
      />
    </div>
  );
};

export default Index;
