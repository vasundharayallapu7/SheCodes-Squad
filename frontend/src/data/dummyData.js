export const demoVideo = {
  title: 'Introduction to Neural Networks - Deep Learning Fundamentals',
  channel: 'AI Classroom',
  duration: '42:18',
  views: '218K',
  published: 'May 12, 2026',
  thumbnail:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  url: 'https://www.youtube.com/watch?v=lecturelens-demo',
  summary:
    'A practical walkthrough of how neural networks learn patterns through layers, weights, activations, loss functions, and gradient descent.',
  stats: [
    { label: 'Transcript', value: '5 sections' },
    { label: 'Notes', value: '12 key ideas' },
    { label: 'Quiz', value: '5 questions' },
    { label: 'Flashcards', value: '8 cards' },
  ],
};

export const transcript = [
  {
    time: '00:00',
    title: 'Opening intuition',
    text: 'Neural networks are introduced as layered systems that transform input data into useful predictions.',
  },
  {
    time: '07:42',
    title: 'Weights and activations',
    text: 'The lecture explains how weights decide signal strength and activation functions add non-linear behavior.',
  },
  {
    time: '16:20',
    title: 'Loss functions',
    text: 'Loss is described as the measurable gap between a prediction and the expected answer.',
  },
  {
    time: '25:55',
    title: 'Gradient descent',
    text: 'The model improves by nudging weights in the direction that reduces loss over many training steps.',
  },
  {
    time: '36:10',
    title: 'Practical tradeoffs',
    text: 'The teacher closes with overfitting, dataset quality, validation, and why interpretability matters.',
  },
];

export const notes = [
  {
    heading: 'Core idea',
    body: 'A neural network approximates a function by stacking layers of small mathematical transformations.',
  },
  {
    heading: 'Forward pass',
    body: 'Inputs move through weighted connections, bias terms, and activation functions until the network produces an output.',
  },
  {
    heading: 'Training loop',
    body: 'Training repeats prediction, loss calculation, backpropagation, and parameter updates.',
  },
  {
    heading: 'Common risks',
    body: 'Overfitting happens when a model memorizes training examples instead of learning general patterns.',
  },
];

export const quiz = [
  {
    question: 'What does a loss function measure?',
    options: ['Prediction error', 'Dataset size', 'Video length', 'Number of layers'],
    answer: 'Prediction error',
  },
  {
    question: 'Why are activation functions important?',
    options: ['They add non-linearity', 'They download data', 'They remove labels', 'They create thumbnails'],
    answer: 'They add non-linearity',
  },
  {
    question: 'What is gradient descent used for?',
    options: ['Updating weights', 'Recording audio', 'Compressing video', 'Sorting notes'],
    answer: 'Updating weights',
  },
  {
    question: 'Which practice helps detect overfitting?',
    options: ['Validation data', 'Louder audio', 'Longer titles', 'Random colors'],
    answer: 'Validation data',
  },
  {
    question: 'What happens during a forward pass?',
    options: ['Inputs become predictions', 'Answers are hidden', 'PDFs are exported', 'History is deleted'],
    answer: 'Inputs become predictions',
  },
];

export const flashcards = [
  { front: 'Neural Network', back: 'A layered model that learns patterns from examples.' },
  { front: 'Weight', back: 'A trainable value that controls signal strength between units.' },
  { front: 'Activation', back: 'A function that helps the network model complex, non-linear relationships.' },
  { front: 'Loss', back: 'A score showing how far predictions are from expected answers.' },
  { front: 'Gradient Descent', back: 'An optimization method that adjusts weights to reduce loss.' },
  { front: 'Overfitting', back: 'When a model performs well on training data but poorly on new data.' },
  { front: 'Backpropagation', back: 'The process for calculating how each weight contributed to error.' },
  { front: 'Validation Set', back: 'Data reserved to evaluate how well the model generalizes.' },
];

export const historyItems = [
  {
    id: 1,
    title: 'Introduction to Neural Networks',
    topic: 'Deep Learning',
    date: 'Today',
    progress: 100,
    thumbnail: demoVideo.thumbnail,
  },
  {
    id: 2,
    title: 'Photosynthesis Explained',
    topic: 'Biology',
    date: 'Yesterday',
    progress: 100,
    thumbnail:
      'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Calculus: Limits and Continuity',
    topic: 'Mathematics',
    date: 'Jun 21',
    progress: 82,
    thumbnail:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80',
  },
];

export const teamMembers = ['Y.Vasundhara', 'Shree Vijaya', 'Tejaswini', 'Muskina Banu','Bhavana'];
export const technologies = ['React 19', 'Vite', 'React Router DOM', 'React Icons', 'CSS', 'Mock AI Workflow'];
