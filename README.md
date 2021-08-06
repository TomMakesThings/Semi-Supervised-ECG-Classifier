<div align="center">
  <p><img src="https://github.com/TomMakesThings/Semi-Supervised-ECG-Classifier/blob/gh-pages/Assets/Readme_Assets/Title.png" width="100%"></p>
  <p><b>AI group project by <a href="https://github.com/TomMakesThings">TomMakesThings</a>, <a href="https://github.com/laviniafr">laviniafr</a>, <a href="https://github.com/davejjwilliams">davejjwilliams</a> & <a href="https://github.com/willRegen">willRegen</a></b></p>
  <p><b><sub>May 2021</sub></b></p>
</div>

---

<h1>About</h1>
<p>The aim was to create a classifier that can detect if a patient has one of several types of heart condition, known as arrhythmia, given a time series of an electrocardiogram (ECG) heartbeat. We focused on self-supervised and transfer learning to see if we could improve the accuracy for two different network architectures.</p>

<p>The chosen approach involved first applying unsupervised clustering to the data, training a model using the assigned clusters as labels, and finally transferring the weight's of this model to another with the same architecture and training it to classify the original arrhythmia labels.</p>

<p>Our best model achieved a high test accuracy of 97% by combining a Convolutional Neural Network (CNN) layer with a Temporal Convolutional Network (TCN) as depicted in the diagram below. While unfortuantely our clustering transfer learning approach did not lead to a significant improvement in accuracy, our work goes to show that TCNs, a relatively new and underrepresented architecture for time-series data, results in superior performance compared to the current standard of CNN and LSTM architectures for ECG classification.</p>

<p><img src="https://github.com/TomMakesThings/Semi-Supervised-ECG-Classifier/blob/gh-pages/Assets/Images/TCN-Diagram.png" width=400></p>
